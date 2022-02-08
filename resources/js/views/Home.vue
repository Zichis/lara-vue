<template>
    <div>
        <h1 class="font-light text-3xl text-blue-700">Home</h1>
        <p>This is where we start!</p>
        <h3>User</h3>
        <p>Name: {{ user.name }}</p>
        <p>Age: {{ user.age }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            user: {},
        };
    },
    created() {
        axios
            .get(process.env.MIX_APP_URL + "/api/data")
            .then((response) => {
                console.log(process.env.MIX_APP_URL);
                this.user = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
    },
};
</script>
