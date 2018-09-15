class Alertcik {

    constructor(options) {
        document.querySelectorAll("*").forEach((element) => {
            this.zIndex = element.style.zIndex > this.zIndex ? element.style.zIndex + 1 : ((this.zIndex !== undefined) ? this.zIndex : 1);
        });

        this.options = {
            width : 150,
            height : 150,
            title : 'Alertcik',
            message : 'Welcome Alertcik!',
            position : 'center',
            onClosed : function() {
                alert("11");
            }
        };

        if(options !== undefined) {
            options.width   !== undefined ? this.options.width   = options.width : undefined;
            options.height  !== undefined ? this.options.height  = options.height : undefined;
            options.title   !== undefined ? this.options.title   = options.title : undefined;
            options.message !== undefined ? this.options.message = options.message : undefined;
        }

        this.template = '<div class="alertcik alertcik-'+this.options.position+'" style="width: '+this.options.width+'px; height: '+this.options.height+'px;z-index: '+this.zIndex+'">' +
                            '<div class="alertcik-header">'+
                                '<div style="float:left;width:90%;">'+ this.options.title + '</div>'+
                                '<div class="alertcik-close" style="float:left;width:9%;"><i class="fa fa-window-close"></i></div>'+
                            '</div>'+
                            '<div class="alertcik-body">'+this.options.message+'</div>'+
                        '</div>';
    }

    alert() {
        this.appendChild();
    }

    appendChild() {
        let el = new DOMParser().parseFromString(this.template , 'text/html').body.firstChild;
        let e  = document.body.appendChild(el);
        let onClosedFnc = this.options.onClosed;
        e.getElementsByClassName("alertcik-close")[0].onclick = function() {
            this.closest(".alertcik").remove();
            if(onClosedFnc !== undefined)
            {
                onClosedFnc();
            }
        }
    }
}