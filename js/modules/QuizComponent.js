export default{
    template:`
    <div id="quiz">
            <section class="row">
                <div class="col-xs-10 offset-sm-3 col-sm-6">
                    
                    <div class="col-xs-6">
                        <h2 class="col">ORGAN DONATION QUIZ</h2>
                    </div>

                    <div class="col-xs-10">
                        <p class="col">There's a lot of misinformation out there about organ donation. Can you seperate the facts from fiction?</p>
                    </div>
                    
                    <div class="col-xs-4 offset-xs-3 offset-sm-4">
                        <button class=" offset-xs-4 btn playBtn">PLAY NOW</button>
                    </div>                  
                    
                </div>
            </section>
        </div>
    `,

    data(){
        return{
            currentDonorDetails: {},

            retrivedDonor: []
            }
        },
        created: function(){
            this.loadDonors("1");
        },
        methods:{
            loadDonors(donorId){            

                let url = `./admin/scripts/index.php?donor=${donorId}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        this.retrivedDonor = data;
                        this.currentDonorDetails = data[0];
                    })
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
    
}