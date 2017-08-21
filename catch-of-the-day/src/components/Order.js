import React from 'react';

class Order extends React.Component {
	render () {
		const orderIds = Object.keys(this.props.order);
		return (
			<div className="order-wrap">
				<h2>Your Order</h2>
				<p>{orderIds}</p>
			</div>
		)
	}
}

export default Order;