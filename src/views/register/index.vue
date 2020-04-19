<template>
    <div class="register">
        <!--    头部    -->
        <van-nav-bar
                title="注册"
                @click-left="$router.go(-1)">
            <template #left>
                <van-icon name="arrow-left"/>
            </template>
        </van-nav-bar>
        <div class="bg">
            <!--    logo    -->
            <img class="logo" src="@/assets/login/n计划logo.png">
            <!--    form    -->
            <div class="content">
                <van-form @submit="onSubmit">

                    <van-row>
                        <van-col span="17">
                            <van-field
                                    class="codeInput"
                                    v-model="obj.username"
                                    name="username"
                                    placeholder="点击生成ID">
                                <template #left-icon>
                                    <i class="iconfont icon-shenfen"></i>
                                </template>
                            </van-field>
                        </van-col>
                        <van-col span="7">
                            <van-button round class="generateid">生成</van-button>
                        </van-col>
                    </van-row>


                    <van-field
                            v-model="obj.password"
                            type="password"
                            name="password"
                            placeholder="请输入密码">
                        <template #left-icon>
                            <i class="iconfont icon-lock"></i>
                        </template>
                    </van-field>
                    <van-field
                            v-model="obj.verify"
                            type="password"
                            name="verify"
                            placeholder="请确认密码">
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
                            <van-button round class="generateid">CMYK</van-button>
                        </van-col>
                    </van-row>

                    <!--    下一步    -->
                    <div class="subButton">
                        <van-button round block size="large" native-type="submit">
                            下一步
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
        data() {
            return {
                obj: {},
                codeImg: '@/assets/login/第三个右.png',
            }
        },
        methods: {
            onSubmit() {
                // 提交注册
            },
            changeImg() {
                // 请求验证码
            }
        }
    }
</script>

<style lang="less">
    .register {
        text-align: center;

        .van-nav-bar__title {
            font-size: 18px;
        }

        .van-icon.van-icon-arrow-left {
            color: #2d2d2d;
            font-size: large;
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

            .van-cell.van-field {
                border-radius: 999px;
                margin-bottom: 22px;
            }

            .generateid.van-button--round {
                border-top-left-radius: initial;
                border-bottom-left-radius: initial;
                width: 84%;
                color: #969799;
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
                margin-top: 78px;
            }
        }
    }
</style>
