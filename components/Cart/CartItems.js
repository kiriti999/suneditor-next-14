import React from "react";
import Link from "next/link";
import { kConverter } from '../../utils/cart/currencyHelper';
import styles from './Cart.module.css';

const CartItems = ({ id, title, price, live_training_price, video_course_price, purchaseType, image, onRemove }) => {
	if (!price) {
		price = purchaseType === 'live' ? live_training_price : video_course_price;
	}

	return (
		<tr>
			<td className={styles['product-thumbnail']}>
				<Link href="#">
					<a>
						<img src={image} alt="item" />
					</a>
				</Link>
			</td>

			<td className={styles['product-name']}>
				<Link href="#">
					<a>{title}</a>
				</Link>
			</td>

			<td className={styles['product-price']}>
				<span className={styles['unit-amount']}>&#8377;{kConverter(price)}</span>
			</td>

			<td className={styles['product-name']}>
				<span className="">{purchaseType}</span>
			</td>

			<td className={`${styles['product-subtotal']} text`} id={id}>
				<button onClick={() => onRemove(id)} className={styles['remove']}>
					<i className="bx bx-trash"></i>
				</button>
			</td>
		</tr>
	);
};

export default CartItems;
