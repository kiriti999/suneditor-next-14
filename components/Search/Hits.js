import CourseCard from "../Courses/CourseCard";

const { Highlight } = require("react-instantsearch-dom");

function Hit({ hit }) {
  return (
    <div className="col-lg-6">
      <CourseCard id={hit.objectID} title={hit.title} price={hit.price} overview={hit.overview} profilePhoto={hit.profilePhoto} lessons={hit.lessons} user={hit.user} enroled_courses={hit.enroled_courses} />
    </div>
  );
}

export default Hit;
