class Alertcik {

    constructor(options) {
        document.querySelectorAll("*").forEach((element) => {
            this.zIndex = element.style.zIndex > this.zIndex ? element.style.zIndex : this.zIndex;
        });

        this.options = {
            width : 150,
            height : 150,
            title : 'Alertcik',
            message : 'Welcome Alertcik!'
        };

    this.template = '<div style="background-color: red;width: '+this.options.width+'px; height: '+this.options.height+'px;z-index: '+this.zIndex+'">' +
                            '<div>'+this.options.title+'</div>' +
                            '<div>'+this.options.message+'</div>' +
                        '</div>';
    }

    alert() {
        document.writeln(this.template);
    }
}
