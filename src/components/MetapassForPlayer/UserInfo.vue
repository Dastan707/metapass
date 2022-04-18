<template>
  <div class="card" v-for="card in user" :key="card.id">
      <div class="card-image">
          <img src="../../assets/image.svg" alt="img">
      </div>
      <div class="card-user_name">
      <h4>{{card.nickname}}</h4>
      </div>
      <p class="card-user_info">
          {{card.description}}
      </p>
      <div class="card-user_skills">
        <p v-for="skill in card.skills" :key="skill.id">{{skill}}</p>
      </div>
      <hr>
      <div class="card-user_status" >
          <p v-for="status in card.state" :key="status.id">{{status}}</p>
      </div>
      <div class="card-user_guild">
          <span>
              <p>Guild</p>
          </span>
          <span>
            <p>{{card.guild}}</p>
          </span>
      </div>
      <div class="card-footer">
          <img src="../../assets/novaImg.svg" alt="nova">
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style lang="scss" scoped>
.card{
    position: relative;
    z-index: 2;
    width: 300px;
    height: 100%;
    background-color: #272A2E;
    color: white;
    border-radius: 13px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    &-image{
        display: flex;
        justify-content: center;
        img{
            border-radius: 15px;
            width: 270px;
            height: 265px;
        }
    }
    &-user{
        &_name{
            h4{
              margin: 20px 0px;
              font-family: $aven-font-family;
              font-weight: 700;
              font-style: normal;
              font-size: 30px;
            }
        }
        &_info{
            font-family: $stellar-font-family;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
        }
        &_skills{
            display: flex;
            justify-content: space-between;
            p{
                width: 70px;
                height: 23px;
                background-color: #BC1F6F;
                border-radius: 20px;
                text-align: center;
                text-transform: uppercase;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                padding: 2px 2px 0px 3px;
            }
        }
        &_skills p:nth-child(2){
            background-color: #249BB6;
        }
        &_skills p:nth-child(3){
            background-color: #24B65E;
            width: 90px;
        }
        &_status{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            p{
                width: 100%;
                height: 22px;
                background-color: #249BB6;
                text-align: center;
                border-radius: 10px;
                text-transform: uppercase;
                margin-bottom: 10px;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                padding-top: 1px;
            }
        }
        &_guild{
            margin-top: 50px;
            display: flex;
            align-items: center;
            span > p{
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
            }
        }
        &_guild > span:nth-child(1){
            p{
                width: 70px;
                background-color: #272A2E;
                border: 1px solid white;
                border-radius: 15px;
                text-transform: uppercase;
                text-align: center;
                margin-right: 10px;
                padding: 2px 0px 0px 2px;
            }
        }
    }
    hr{
        width: 100%;
    }
    &-footer{
        img{
            width: 100%;
        }
    }
}

</style>
