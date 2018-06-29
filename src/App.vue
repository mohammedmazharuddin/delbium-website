<template>
  <div>
    <!--Navbar-->
    <navbar :src="require('./assets/delbium_logo.png')"  alt="Delbium logo" >
      <navbar-collapse>
        <navbar-nav right>
          <router-link to="/dashboard" @click.native="activeItem = 1"><navbar-item href="" waves-fixed active>Home</navbar-item></router-link>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>Products</navbar-item>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>Innovations</navbar-item>
          <navbar-item href="https://mdbootstrap.com/bootstrap-tutorial/" waves-fixed>Resources</navbar-item>
          <navbar-item href="https://mdbootstrap.com/bootstrap-tutorial/" waves-fixed>About us</navbar-item>
        </navbar-nav>
        <!-- <navbar-nav right >
          <navbar-item href="#!" waves-fixed><fa class="text-black" icon="facebook"/></navbar-item>
          <navbar-item href="#!" waves-fixed><fa icon="twitter"/></navbar-item>
        </navbar-nav> -->
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <main>
      <div>
        <router-view></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <div class="pt-4">
          <btn outline="white" tag="a" href="#" target="_blank">Contact us<fa icon="address-card" class="ml-2"/></btn>
          <btn outline="white" tag="a" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Newsletter<fa icon="envelope" class="ml-2"/></btn>
        </div>
        <hr class="my4"/>
        <div class="pb-4">
          <a href="#"><fa icon="facebook" class="mr-3"/></a>
          <a href="#"><fa icon="twitter" class="mr-3"/></a>
          <a href="#"><fa icon="youtube" class="mr-3"/></a>
          <a href="#"><fa icon="google-plus" class="mr-3"/></a>
          <a href="#"><fa icon="dribbble" class="mr-3"/></a>
          <a href="#"><fa icon="pinterest" class="mr-3"/></a>
          <a href="#"><fa icon="github" class="mr-3"/></a>
          <a href="#"><fa icon="codepen" class="mr-3"/></a>
        </div>
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{new Date().getFullYear()}} Copyright: <a href="http://www.delbium.com"> delbium.com </a>
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import { Container, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, Fa, ListGroup, ListGroupItem, CardBody, Footer, waves } from 'mdbvue'

export default {
  name: 'AdminTemplate',
  components: {
    Container,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    ListGroup,
    ListGroupItem,
    Fa,
    CardBody,
    'ftr': Footer
  },
  data () {
    return {
      activeItem: 1
    }
  },
  beforeMount () {
    this.activeItem = this.$route.matched[0].props.default.page
  },
  mixins: [waves]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background-color: #EDEDEE;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
<style>
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>
