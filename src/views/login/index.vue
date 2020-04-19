<template>
    <div class="login">
        <!--    头部    -->
        <van-nav-bar title="登录"/>
        <div class="bg">
            <!--    logo    -->
            <img class="logo" src="@/assets/login/n计划logo.png">
            <!--    form    -->
            <div class="content">
                <van-form @submit="onSubmit">
                    <van-field
                            v-model="obj.username"
                            name="username"
                            placeholder="请输入用户名">
                        <template #left-icon>
                            <i class="iconfont icon-shenfen"></i>
                        </template>
                    </van-field>
                    <van-field
                            v-model="obj.password"
                            type="password"
                            name="password"
                            placeholder="请输入登录密码">
                        <template #left-icon>
                            <i class="iconfont icon-lock"></i>
                        </template>
                    </van-field>

                    <van-row>
                        <van-col span="17">
                            <van-field
                                    class="codeInput"
                                    v-model="obj.captcha"
                                    name="captcha"
                                    placeholder="请输入图形验证码">
                                <template #left-icon>
                                    <i class="iconfont icon-fanghu"></i>
                                </template>
                            </van-field>
                        </van-col>
                        <van-col span="7">
                            <!--                            <img class="loginCode" @click="changeImg" :src="codeImg" alt="">-->
                            <van-button round class="imgCode" native-type="button">CMYK</van-button>
                        </van-col>
                    </van-row>


                    <!--    记住密码、忘记密码、注册      -->
                    <div class="other">
                        <van-checkbox v-model="checked" label-position="left" @click="checked==!checked"
                                      icon-size="16px">记住密码
                        </van-checkbox>

                        <span @click="forgetpsd">忘记密码 ？</span>

                        <span @click="register">注册</span>
                    </div>
                    <!--    确定    -->
                    <div class="subButton">
                        <van-button round block size="large" native-type="submit">
                            确定
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {
            // 记住密码
            this.getPassword()
        },
        data() {
            return {
                obj: {
                    username: '',
                    password: '',
                    captcha: ''
                },
                codeImg: '@/assets/login/第三个右.png',
                checked: false
            }
        },
        methods: {
            register() {
                this.$router.push('./register')
            },
            forgetpsd() {
                this.$router.push('./forgetpsd')
            },
            onSubmit(values) {
                // 请求登录
                console.log(this.obj)
                if (this.checked) {
                    let strObj = JSON.stringify({
                        username: this.obj.username,
                        password: this.obj.password,
                        checked: this.checked
                    });
                    this.$cookie.set('userInfo', strObj, 1);
                } else {
                    this.$cookie.delete('userInfo');
                }
                this.$router.push('/index')
            },
            changeImg() {
                // 请求验证码
            },
            getPassword() {
                if (this.$cookie.get('userInfo')) {
                    let userInfo = JSON.parse(this.$cookie.get('userInfo'));
                    this.obj.username = userInfo.username
                    this.obj.password = userInfo.password
                    this.checked = userInfo.checked
                }
            }
        }
    }
</script>

<style lang="less">
    .login {
        text-align: center;

        .van-nav-bar__title {
            font-size: 18px;
        }

        .bg {
            position: fixed;
            background: url("../../assets/login/bg.png");
            background-size: cover;
            width: 100%;
            height: 100%;
        }

        img.logo {
            width: 50%;
            margin-top: 90px;
        }

        .content {
            margin: 50px 15px;

            .imgCode.van-button--round {
                border-top-left-radius: initial;
                border-bottom-left-radius: initial;
                width: 84%;
                color: #969799;
            }

            .van-cell.van-field {
                border-radius: 999px;
                margin-bottom: 22px;
            }

            .codeInput.van-cell.van-field {
                border-top-right-radius: initial;
                border-bottom-right-radius: initial;
            }

            .loginCode {

                width: 90%;
                height: 46px;
                margin-left: 4px;
            }

            .other {
                display: flex;
                justify-content: space-around;
                color: #fff;

                .van-checkbox__label {
                    color: #fff;
                }

                .van-icon {
                    border-color: rgba(98, 23, 184, 0.99);
                }
            }

            .subButton {
                margin-top: 115px;
            }
        }
    }
</style>
