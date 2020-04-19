<template>
    <div class="forgetpsd">
        <!--    头部    -->
        <van-nav-bar
                title="忘记密码"
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
                            placeholder="请输入新密码">
                        <template #left-icon>
                            <i class="iconfont icon-lock"></i>
                        </template>
                    </van-field>
                    <van-field
                            v-model="obj.verify"
                            type="password"
                            name="verify"
                            placeholder="请再次输入新密码">
                        <template #left-icon>
                            <i class="iconfont icon-lock"></i>
                        </template>
                    </van-field>

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
    import Toast from "vant/lib/toast";

    export default {
        name: "forgetpsd",
        data() {
            return {
                obj: {
                    username: '',
                    password: '',
                    verify: ''
                }
            }
        },
        methods: {
            onSubmit() {
                // 发送重置密码请求
                console.log(this.obj)
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="less">
    .forgetpsd {
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
            background: url("../../../assets/login/bg.png");
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

            .subButton {
                margin-top: 160px;
            }
        }
    }
</style>
