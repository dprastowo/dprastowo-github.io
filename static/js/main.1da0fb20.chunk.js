(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(a,e,n){},14:function(a,e,n){},15:function(a,e,n){"use strict";n.r(e);var t=n(0),r=n.n(t),l=n(6),m=n.n(l),o=(n(13),n(7)),s=n(1),c=n(2),i=n(4),u=n(3),h=(n(14),function(a){return 0!==a.stock?r.a.createElement("div",{style:{border:"1px solid black",width:300,margin:"auto"}},r.a.createElement("p",null,"Nama Menu: ",a.namaMenu),r.a.createElement("p",null,"Harga: Rp. ",a.hargaMenu),r.a.createElement("p",null,"Stock: ",a.stock)):null}),g=function(a){Object(i.a)(n,a);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{border:"1px solid black",width:300,margin:"auto"}},r.a.createElement("p",null,"Nama Menu: ",this.props.namaMenu),r.a.createElement("p",null,"Harga: Rp. ",this.props.hargaMenu))}}]),n}(t.Component),p=function(a){Object(i.a)(n,a);var e=Object(u.a)(n);function n(){var a;return Object(s.a)(this,n),(a=e.call(this)).handleGantiNama=function(e){a.setState({namaResto:e})},a.handleChange=function(e){var n=e.target.name,t=e.target.value;a.setState(Object(o.a)({},n,t))},a.state={namaResto:"Codepolitan",namaPembeli:"",keterangan:"",jenisPembayaran:"",menuMakanan:[{nama:"Ayam Bakar",harga:25e3,stock:10},{nama:"Nasi Goreng",harga:22e3,stock:0}],menuMinuman:[{nama:"Juice Melon",harga:15e3},{nama:"Milkshake Strawberry",harga:2e4},{nama:"Juice Tomat",harga:15e3},{nama:"Juice Mangga",harga:15e3},{nama:"Juice Alpukat",harga:15e3}]},a}return Object(c.a)(n,[{key:"render",value:function(){var a=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Cafe and Resto ",this.state.namaResto),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.handleGantiNama("Margonda")}},"Ganti nama Resto"),r.a.createElement("div",{className:"row",style:{marginTop:"10px"}},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nama Pembeli"),r.a.createElement("input",{className:"form-control",name:"namaPembeli",onChange:this.handleChange,value:this.state.namaPembeli}),r.a.createElement("small",null,"Nama pembeli: ",this.state.namaPembeli)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Keterangan: "),r.a.createElement("textarea",{className:"form-control",name:"keterangan",onChange:this.handleChange,value:this.state.keterangan}),r.a.createElement("small",null,"Keterangan: ",this.state.keterangan)),r.a.createElement("select",{className:"form-control",name:"jenisPembayaran",value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"cash"},"Cash"),r.a.createElement("option",{value:"kartuKredit"},"Kartu Kredit"),r.a.createElement("option",{value:"voucher"},"Voucher")),r.a.createElement("small",null,"Jenis Pembayaran: ",this.state.jenisPembayaran)))),r.a.createElement("h2",null,"Menu Makanan"),r.a.createElement(h,{namaMenu:this.state.menuMakanan[0].nama,hargaMenu:this.state.menuMakanan[0].harga,stock:this.state.menuMakanan[0].stock}),r.a.createElement(h,{namaMenu:this.state.menuMakanan[1].nama,hargaMenu:this.state.menuMakanan[1].harga,stock:this.state.menuMakanan[1].stock}),r.a.createElement("h2",null,"Menu Minuman"),this.state.menuMinuman.map((function(a){return r.a.createElement(g,{namaMenu:a.nama,hargaMenu:a.harga})})))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},8:function(a,e,n){a.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1da0fb20.chunk.js.map