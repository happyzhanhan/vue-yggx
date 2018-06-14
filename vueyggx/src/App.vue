<template>
  <div id="app">
    <div class="usertop">
      <div class="miniw">
        <div class="logoleft">
          <h3>用户中心</h3>
        </div>
        <div class="menu">
          <ul>
            <li><a href="#">用户管理</a></li>
            <li><a href="#">新零售商中心</a></li>
            <li><a href="#">供货商中心</a></li>
          </ul>
        </div>
        <div class="userright">
          <ul>
            <li><a href="#"><i class="el-icon-d-arrow-left"></i>回首页</a></li>
            <li><b>用户150***0456，</b><a href="#">退出</a></li>
          </ul>
        </div>
      </div>

    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{margin:0;padding:0;border:0;}
ul,li{list-style: none; font-weight:normal;}
a{text-decoration:none;}
$--color-primary: #f60;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.miniw{
  max-width:1200px;
  margin:0 auto;
}
.usertop{
  width:100%;
  height:75px;
  background:#ff6537;
  color:#fff;
  line-height:75px;
  ul{
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    margin: auto;
    li{
      float:left;
      a{
        color:#fff;
        &:hover{
          font-weight:500;
        }
      }
    }
  }
  .logoleft,.menu{
    float:left;
  }
  .userright{
    float:right;
  }
  .logoleft{
    margin-right:40px;
    h3{font-weight:300; font-size:26px; width:200px; text-align:center;}
  }
  .menu{
    ul{
      li{
      margin-right:20px;
        a{
          padding:8px 9px;
          line-height:14px;
          border-radius:5px;
          font-size:14px;
          display:inline-block;
          &:hover,&.hover{
            background:#fff;
            color:#ff6537;
          }
        }
      }
    }
  }
  .userright{
    ul{
      li{
        margin-left:20px;
        b{font-weight:normal;font-size:14px;}
        a{font-size:14px;
          &:hover{
             text-decoration:underline;
             color: yellow;
          }
        }
      }
    }
  }
}
</style>
