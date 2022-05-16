<template>
    <div>User Detail Page</div>
</template>

<script>
import api from '../api/index'
export default {
    name: "UserDetail",
    created() {
        api.user.getUserDetail()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    },
    data() {
        return {
            user: {}
        }
    },
};
</script>

<style scoped></style>
