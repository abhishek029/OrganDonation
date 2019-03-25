export default{
    template:`
    <div>
            <section class="row" id="mainVideo">
            <div class="col-sm-12">
                <video class="col-sm-8 offset-sm-2" :src="'video/'+currentDonorDetails.donor_video" type="video/mp4" controls>
                
                </video>
                <div class="row offset-2">
                <div class="col-sm-3">
                    <img class="col" :src="'images/' + currentDonorDetails.donor_thumb" alt="donor">
                </div>
                 <p class="col-sm-6">{{currentDonorDetails.donor_desc}}</p>
                 </div>
                <button class="col-sm-4 offset-sm-4 playBtn">REGISTER NOW</button>
            </div>
            </section>

            <!-- code for all recipients in database -->
            <section class="row" id="moreVideo">
                <div v-for="donor in retrivedDonor" @click='changeDonor(donor)' class="col-sm-3">
                    <img class="col-sm-9 offset-sm-3" :src="'images/'+donor.donor_thumb" :alt="donor.donor_name">
                    <h3 class="col-sm-9 offset-sm-3 text-center">{{donor.donor_name}}</h3>
                    <p class="col-sm-9 offset-sm-3  text-center">{{donor.donor_desc}}</p> 
                </div>               
            </section>

            <section class="row" id="contactStory">
                <h2 id="shareHead" class="col-sm-4 offset-sm-2">SHARE YOUR STORY</h2>
                <p class="col-sm-8 offset-sm-2">
                    Are you an organ donation recipient who is willing to share your story? We'd love to hear from you an use your experience to help spread awareness of the pressing need for organ donors.
                </p>
                <button class="col-sm-4 offset-sm-4 contactBtn">CONTACT US</button>
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
        console.log("this is vue created");
        this.loadDonors();
    },

    methods:{
        calledOnParent(){
            console.log("this method is from vue");
        },
        changeDonor(donor){
            console.log("current dodor changed to "+donor.donor_name);
            this.currentDonorDetails = donor;
        },

        loadDonors(){            
            
            let url = `./admin/scripts/index.php?donor=1`;

            console.log(url);
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