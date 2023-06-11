import React from "react";
import Link from "next/link";
import { kConverter } from '../../utils/cart/currencyHelper';

const CartItems = ({ id, title, price, image, onRemove }) => {
	return (
		<tr>
			<td className="product-thumbnail">
				<Link href="#">
					<a>
						<img src={image} alt="item" />
					</a>
				</Link>
			</td>

			<td className="product-name">
				<Link href="#">
					<a>{title}</a>
				</Link>
			</td>

			<td className="product-price">
				<span className="unit-amount">&#8377;{kConverter(price)}</span>
			</td>

			<td className="product-subtotal text">
				<button onClick={() => onRemove(id)} className="remove">
					<i className="bx bx-trash"></i>
				</button>
			</td>
		</tr>
	);
};

export default CartItems;
