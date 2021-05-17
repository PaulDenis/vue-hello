var app = new Vue ({
    el: "#root",
    data: {
        message: "Hello World with Vue!",
        image: {
            img: "img/vue_logo.webp"
        }
    },
    methods: {
        cambia_img: function() {
            if (this.image.img == "img/vue_logo.webp") {
                this.image.img = "img/logo_vue_2.jpeg"
            } else {
                this.image.img = "img/vue_logo.webp";
            };
        }
    }
    
});