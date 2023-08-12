import algoliasearch from 'algoliasearch';

const client = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
	process.env.ALGOLIA_SEARCH_ADMIN_KEY
);

async function algoliaSearchByKeyword(index, keyword) {
	const searchIndex = client.initIndex(index);
	const response = await searchIndex.search(keyword);

	return response;
}

async function algoliaGetCategoryList(index) {
	const searchIndex = client.initIndex(index);

	const { hits } = await searchIndex.search('', {
		attributesToRetrieve: ['category']
	});

	const result = [];
	const indexMapping = {};
	let indicator = 0;

	// remove duplicate values and memorize the count
	hits.forEach(({ category }, index) => {
		const categoryLowerCase = category.toLowerCase();

		if (Number.isInteger(indexMapping[categoryLowerCase])) {
			result[indexMapping[categoryLowerCase]].count += 1;
		} else {
			indexMapping[categoryLowerCase] = indicator;
			result.push({
				name: category,
				count: 1
			});

			indicator += 1;
		}
	});

	return result.sort((a, b) => b.count - a.count);
}

async function algoliaGetRecentEntries(index, limit = 5) {
	const searchIndex = client.initIndex(index);

	searchIndex.setSettings({
		ranking: ['desc(date)']
	});

	const response = await searchIndex.search('', {
		hitsPerPage: limit
	});

	return response;
}

export {
	algoliaSearchByKeyword,
	algoliaGetCategoryList,
	algoliaGetRecentEntries
};
