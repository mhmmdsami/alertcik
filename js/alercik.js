class Alertcik {
    alert(options) {
        document.querySelectorAll("*").forEach((element) => {
            this.zIndex = element.style.zIndex > this.zIndex ? element.style.zIndex + 1 : ((this.zIndex !== undefined) ? this.zIndex : 1);
        });

        this.options = {
            title : 'Alertcik',
            message : 'Welcome Alertcik!',
            position : 'center',
            btntext : 'Ok',
            onClosed : undefined,
            onOk : undefined
        };

        if(options !== undefined) {
            options.title   !== undefined ? this.options.title   = options.title   : undefined;
            options.message !== undefined ? this.options.message = options.message : undefined;
            options.onOk !== undefined ? this.options.onOk = options.onOk : undefined;
            options.onClosed !== undefined ? this.options.onClosed = options.onClosed : undefined;
            options.position !== undefined ? this.options.position = options.position : undefined;
            options.btntext !== undefined ? this.options.btntext = options.btntext : undefined;
        }

        console.log(this.options);

        this.template = '<div class="alertcik '+this.options.position+'" style="z-index:'+this.zIndex+'">'+
                            '<div class="alertcik-header">'
                                + this.options.title +
                            '</div>' +
                            '<div class="alertcik-close">' +
                                '<i class="material-icons" style="font-size:18px;">close</i>' +
                            '</div>' +
                            '<hr>' +
                            '<div class="alertcik-body">'
                                + this.options.message +
                            '</div>' +
                            '<hr>' +
                            '<div class="alertcik-buttons">' +
                                '<span class="alertcik-btn">'
                                    + this.options.btntext +
                                '</span>' +
                            '</div>' +
                        '</div>';

        let el = new DOMParser().parseFromString(this.template , 'text/html').body.firstChild;
        let e  = document.body.appendChild(el);
        let onClosedFnc = this.options.onClosed;
        let onOkFnc = this.options.onOk;
        e.getElementsByClassName("alertcik-close")[0].onclick = function() {
            this.closest(".alertcik").remove();
            if(onClosedFnc !== undefined)
            {
                onClosedFnc();
            }
        }
        
        e.getElementsByClassName("alertcik-btn")[0].onclick = function() {
            if(onOkFnc !== undefined)
            {
                onOkFnc();
            }
            this.closest(".alertcik").remove();
        }
    }
}

var alertcik = new Alertcik();