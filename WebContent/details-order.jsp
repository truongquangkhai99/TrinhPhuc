<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Chi tiết đơn hàng</title>
</head>
<body>
	<jsp:include page="header.jsp"></jsp:include>

	<div class="breadcrumb-area">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="breadcrumb-list">
							<h1>Chi tiết đơn hàng</h1>							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- breadcrumb-area end -->
		<!-- cart-main-area start -->
		<div class="cart-main-area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<form action="#">				
							<div class="table-content table-responsive">
								<table>
									<thead>
										<tr>
											<th class="product-thumbnail">Hình ảnh</th>
											<th class="product-name">Sản phẩm</th>
											<th class="product-price">Đơn giá</th>
											<th class="product-quantity">Số lượng</th>
											<th class="product-size">Size</th>
											<th class="product-subtotal">Tổng giá</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="product-thumbnail"><a href="single-product.jsp"><img src="img/giay1.jpg" alt="" /></a></td>
											<td class="product-name"><a href="single-product.jsp">Giày nike đen</a></td>
											<td class="product-price"><span class="amount">900.000đ</span></td>
											<td class="product-quantity"><span>1</span></td>
											<td class="product-size"><span>41</span></td>
											<td class="product-subtotal"><span class="amount">900.000đ</span></td>
										</tr>
										<tr>
											<td class="product-thumbnail"><a href="single-product.jsp"><img src="img/giay1.jpg" alt="" /></a></td>
											<td class="product-name"><a href="single-product.jsp">Giày nike đen</a></td>
											<td class="product-price"><span class="amount">900.000đ</span></td>
											<td class="product-quantity"><span>1</span></td>
											<td class="product-size"><span>40</span></td>
											<td class="product-subtotal"><span class="amount">900.000đ</span></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="row">
								<div class="col-md-8 col-sm-3 col-xs-12">
									<div class="buttons-cart">
										<a href="history.jsp">Trở lại</a>
										<a href="shop.jsp">Tiếp tục mua sắm</a>
									</div>
								</div>
								<div class="col-md-4 col-sm-5 col-xs-12">
									<div class="cart_totals">
										<h2>Tổng giá đơn hàng</h2>
										<table>
											<tbody>
												<tr class="order-total">
													<th>Tổng tiền</th>
													<td>
														<strong><span class="amount">1.800.000đ</span></strong>
													</td>
												</tr>											
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</form>	
					</div>
				</div>
			</div>
		</div>

	<jsp:include page="footer.jsp"></jsp:include>
</body>
</html>