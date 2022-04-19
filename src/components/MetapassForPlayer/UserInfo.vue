<template>
  <div class="card" v-for="card in user" :key="card.id">
      <div class="card-image">
          <img src="../../assets/image.svg" alt="img">
      </div>
      <div class="card-user_name">
      <h4>{{card.nickname}}</h4>
      <img src="../../assets/flag.svg" alt="flag">
      </div>
      <div class="card-discord">
        <div class="card-discord_name">
          <img src="../../assets/discord-fill.svg" alt="img">
          <span>{{card.discord_nickname}}</span>
        </div>
        <div class="card-discord_lang">
          <span>EN | RUS | ESP</span>
        </div>
      </div>
      <p class="card-user_info">
          {{card.description}}
      </p>
      <div class="card-user_devices">
        <p v-for="device in card.devices" :key="device.id">{{device}}</p>
      </div>
      <div class="card-user_skills">
        <p v-for="skill in card.skills" :key="skill.id">{{skill}}</p>
      </div>
      <hr>
      <span id="searching_for">Searching for</span>
      <div class="card-user_status">
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
    &-discord{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: $stellar-font-family;
        font-style: normal;
        color: #878B90;
        margin-bottom: 10px;
       img{
            width: 15px;
            height: 15px;
            margin: 0px 5px 3px 0px;
       }
       &_name{
           display: flex;
           align-items: center;
           font-size: 14px;
       }
       &_lang{
           font-size: 13px;
       }
    }
    &-user{
        &_name{
            display: flex;
            justify-content: space-between;
            h4{
              margin: 20px 0px 0px 0px;
              font-family: $aven-font-family;
              font-weight: 700;
              font-style: normal;
              font-size: 30px;
            }
            img{
              margin-top: 30px;
            }
        }
        &_info{
            font-family: $stellar-font-family;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
        }
        &_devices > p:first-child{
            width: 40px;
        }
        &_devices{
            display: flex;
            p{
                width: 70px;
                height: 23px;
                background-color: #878B90;
                border-radius: 25px;
                text-align: center;
                text-transform: uppercase;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                padding: 2px 2px 0px 3px;
                display: inline-block;
                margin-right: 10px;
            }
        }
        &_skills{
            display: flex;
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
                margin-right: 10px;
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
            align-items: center;
            p{
                width: 120px;
                height: 22px;
                background-color: #249BB6;
                text-align: center;
                border-radius: 10px;
                text-transform: uppercase;
                margin: 0px 10px 10px 0px;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                padding-top: 1px;
            }
        }
        &_status > p:nth-child(2){
            width: 70px;
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
    #searching_for{
        font-family: $aven-font-family;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-transform: uppercase;
        margin: 15px 0px 7px 0px;
    }
}

</style>
