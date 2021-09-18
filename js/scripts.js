const app = new Vue(
    {
        el: "#root",
        data: {
            images: [
                    "https://content.skyscnr.com/m/3025696d9a783cec/original/eyeem-26694340-119850280.jpg?resize=1800px:1800px&quality=100",
                    "https://content.skyscnr.com/m/7ce4f05a32e06519/original/GettyImages-177514864_doc.jpg?resize=1800px:1800px&quality=100",
                    "https://content.skyscnr.com/m/3f7608a679bf7fa1/original/GettyImages-100418761_doc.jpg?resize=1800px:1800px&quality=100"
                ],
            indexImg: 0
        },
        methods: {
            leftImg: function() {
                this.indexImg++;

                if( this.indexImg >=  this.images.length ) {
                    this.indexImg = 0;
                }
            },
            rightImg: function() {
                this.indexImg--;

                if ( this.indexImg == -1 ) {
                    this.indexImg = this.images.length -1;
                }
            }
        }
});
