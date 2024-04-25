function buy(product_name, product_price){
    const message = `Halo saya mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6281805221789?text=${message}`
    open(whatsapp, "_blank")
}

function chat(){
    const message = `Halo Min Saya Mau Tanya Nih tentang Productnya..... `
    const whatsapp = `https://wa.me/6281805221789?text=${message}`
    open(whatsapp, "_blank")
}