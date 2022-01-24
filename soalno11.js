const hp = ["Iphone", "Oppo", "Vivo"];

hp.splice(1, 0, "Asus", "Xiome");
delete hp
console.log(hp.join(","));