<template>
  <form class="position-fixed position-inset bg-white router-fade" style="z-index: 20">
    <div class="d-flex flex-center position-inset">
      <div class="border px-4" style="border-radius: 1rem">
        <div class="pb-3">
          <div class="text-center mx-auto" style="width: 200px; margin-top: -40%">
            <img :src="Logo" />
            <img src="@/assets/logo.png" alt="" style="position-absolute" width="0" />
          </div>
        </div>
        <div>
          <div class="d-flex align-center-center my-2 position-relative">
            <div class="p-1 position-absolute">
              <Icon pattern="User" size="24" />
            </div>
            <input class="form-control" type="text" style="padding-left: 40px" />
          </div>
          <div class="d-flex align-center-center my-2 position-relative">
            <div class="p-1 position-absolute">
              <Icon pattern="Key" size="24" />
            </div>
            <input class="form-control" type="password" style="padding-left: 40px" />
          </div>
          <div class="text-center my-3">
            <button type="button" class="btn btn-primary text-white" @click="login">登入</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { login } from '@/api'
import { Logo } from '@/assets'

export default {
  data() {
    return {
      Logo,
      account: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      Admin: (state) => state.admin,
    }),
  },
  methods: {
    ...mapActions(['adminLoing']),
    async login() {
      const res = await login()
      localStorage.setItem('token', res.data.accountToken)
      localStorage.setItem('refresh-token', res.data.refreshToken)
      this.adminLoing({
        account: this.account,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
