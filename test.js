var content = ` <div class= 'col l-2-4 m-4 c-6'>
<div class= 'product'>
    <a href= '#' class= 'click_product'>
        <div class= 'icon_new'>Mới</div>
        <div class= 'icon_sales'>-100%</div>
        <div class= 'img'>
            <img src= 'assets/img/giay-the-thao-hunter-core-nu-dswh09900trg-trang-9k7tu-color-trang_a70eb60013cf4d41a90d3de78eebcb43_large.jpg' alt= ''>
        </div>
        <div class= 'name_product'>
            Giày Thể Thao Nam Biti's Hunter Street Bloomin' Central DSMH08500
        </div>
    </a>
    <div class= 'btn-info'>
        <div class= 'price'>
            <span class= 'price_new'>1,350,000<span class= 'icon_price'>₫</span></span>
            <del>2,450,000<span class= 'icon_price'>₫</span></del>
        </div>
        <div class= 'btn_product'>
            <a href= '#'>Mua ngay</a>
            <a href= '#'>Thêm vào giỏ hàng</a>
        </div>
    </div>
</div>
</div> `;


const in_products = document.getElementById('in_products');
// console.log(in_products)

var contentsall = '';

for(let i = 0;i <= 15 ; i ++){
    contentsall += content;
}

in_products.textContent = '';

in_products.innerHTML = contentsall;