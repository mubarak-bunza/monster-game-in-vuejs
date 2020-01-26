var app = new Vue({
    el: '#app',
    data: {
        controls: true,
        userScore: 100,
        monsterScore: 100,
        hits: [],
        action: ''
    },
    methods: {
        startGame(){
            this.controls = false;
        },
        attack(){
            this.action = 'Hits';
            let userHit = Math.round(Math.random()*15);
            let monsterHit = Math.round(Math.random()*15);
            let hit = {
                player: userHit,
                monster: monsterHit
            }
            this.hits.unshift(hit);
            this.userScore -= monsterHit;
            this.monsterScore -= userHit;
            if(this.userScore <= 0){
                Swal.fire({
                    icon: 'warning',
                    title: 'Game Over Player!',
                    text: 'Monster Wins',
                    confirmButtonText: 'Try Again'
                }).then(()=>{
                    location.reload();
                })
            }else if(this.monsterScore <= 0){
                Swal.fire({
                    icon: 'info',
                    title: 'Game Over Monster!',
                    text: 'Player Wins',
                    confirmButtonText: 'Play Again'
                }).then(()=>{
                    location.reload();
                })
            }
        },
        specialAttack(){
            let userHit = Math.round(Math.random()*15) + 10;
            let monsterHit = Math.round(Math.random()*15);
            let hit = {
                player: userHit,
                monster: monsterHit
            }
            this.hits.unshift(hit);
            this.userScore -= monsterHit;
            this.monsterScore -= userHit;

            if(this.userScore <= 0){
                Swal.fire({
                    icon: 'warning',
                    title: 'Game Over Player!',
                    text: 'Monster Wins',
                    confirmButtonText: 'Try Again'
                }).then(()=>{
                    location.reload();
                })
            }else if(this.monsterScore <= 0){
                Swal.fire({
                    icon: 'info',
                    title: 'Game Over Monster!',
                    text: 'Player Wins',
                    confirmButtonText: 'Play Again'
                }).then(()=>{
                    location.reload();
                })
            }
        },
        heal(){
            this.action = 'Heal Himself'
            let userHeal = 10;
            let monsterHit = Math.round(Math.random()*15);
            let hit = {
                player: userHeal,
                monster: monsterHit
            }
            this.hits.unshift(hit);
            this.userScore -= monsterHit;
            this.userScore += userHeal;

            if(this.userScore <= 0){
                Swal.fire({
                    icon: 'warning',
                    title: 'Game Over Player!',
                    text: 'Monster Wins',
                    confirmButtonText: 'Try Again'
                }).then(()=>{
                    location.reload();
                })
            }else if(this.monsterScore <= 0){
                Swal.fire({
                    icon: 'info',
                    title: 'Game Over Monster!',
                    text: 'Player Wins',
                    confirmButtonText: 'Play Again'
                }).then(()=>{
                    location.reload();
                })
            }
        },
        giveUp(){
            Swal.fire({
                icon: 'warning',
                title: 'Game Over Player!',
                text: 'Player Gave Up',
                confirmButtonText: 'Try Again'
            }).then(()=>{
                location.reload();
            })
        }
    }
});