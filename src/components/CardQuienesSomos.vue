<template>
    
        <v-row >
            <v-col xs="12" md="4">
                <div class="contenedor  ">
                    <h1 >Mision</h1>
                    <v-img
                        contain
                        max-height="150"
                        
                        src="../assets/mision.png">
                    </v-img>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit voluptatibus quasi 
                        numquam in! Fugiat quia maiores cum neque, repudiandae, magnam distinctio similique ratione 
                        doloremque autem tenetur, molestias quidem accusantium?
                    </h2>
                </div>
            </v-col>
            <v-col xs="12" md="4">
                <div class="contenedor   ">
                    <h1>Vision</h1>
                    <v-img
                    contain
                    max-height="150"
                   
                    src="../assets/vision.png"
                    >
                    </v-img>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit voluptatibus quasi 
                        numquam in! Fugiat quia maiores cum neque, repudiandae, magnam distinctio similique ratione 
                        doloremque autem tenetur, molestias quidem accusantium?
                    </h2>
                </div>
            </v-col>
            <v-col xs="12" md="4">
                <div class="contenedor ">
                    <h1>Valores</h1>
                    <v-img
                    contain
                    max-height="150"
                    
                    src="../assets/valores.png"
                    >
                    </v-img>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit voluptatibus quasi 
                        numquam in! Fugiat quia maiores cum neque, repudiandae, magnam distinctio similique ratione 
                        doloremque autem tenetur, molestias quidem accusantium?
                    </h2>
                </div>
            </v-col>
        </v-row>

</template>

<script >
export default {
    
        name: "CardQuienesSomos.vue",
    data: () => ({
      show1: false,
      show2: false,
      show3: false,
    }),
}
</script>
<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
.cart{
    background-color:rgb(36, 38, 54);
}
.texto{
    text-align: center;
}
.contenedor{
    position:relative;
    text-align:center;
}
h1{
    font-family: 'Lato', sans-serif;
    font-size:48px;
    color:rgb(247,159,27);
}
h2{
    font-family: 'Lato', sans-serif;
    font-size:20px;
    color:rgb(247,159,27);
    
}
</style>