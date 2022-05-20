<template>
    <el-main>
        <el-row>
            <div v-for="post, index in posts" :key="index">
                <Post :post="post"></Post>
            </div>
        </el-row>
    </el-main>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
    name: "Resource",
    components: { Post },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "大学生心理健康答案",
                    user: "丁真",
                    content: "俄乌冲突爆发以来，以美国为首的不少西方国家对俄罗斯实施制裁，新加坡也追随美国脚步，成为东盟唯一一个加入对俄制裁行列的国家。新加坡此前对其他国家实施的所有制裁都基于联合国决议，从这一点看，这次对俄制裁决定颇为罕见，似乎表明新加坡与美国形成了某种特殊关系。在这一背景下，新加坡总理李显龙从3月26日至4月2日访问美国，也是东盟国家领导人在美国总统拜登执政后首次访美。期间，包括美国总统拜登、副总统哈里斯在内的多名美国政要会见李显龙。此外，李显龙还和联合国秘书长及美国工商界领袖会面。新加坡方面称，李显龙此访旨在继续建设两国强健、持久与多面相的双边关系，双方不仅讨论了亚太地区局势，也就俄乌冲突等热点议题交换意见，并重申了两国深化合作的共识。",
                    time: "2022-4-1",
                    avatarURL: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                    tag: [
                        "大心健",
                        "答案",
                    ]
                },
                {
                    id: 2,
                    title: "大物答案",
                    user: "成龙",
                    time: "2022-3-31",
                    content: "",
                    avatarURL: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                    tag: [
                        "大物",
                        "答案"
                    ]
                },
                {
                    id: 3,
                    title: "vscode插件",
                    user: "大票客",
                    time: "2022-4-1",
                    content: "",
                    avatarURL: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                    tag: [
                        "插件",
                        "编程",
                        "vscode",
                        "vim"
                    ]
                },
                {
                    id: 4,
                    title: "计算机专业电子书",
                    user: "经常帮助撬家人",
                    time: "2022-4-1",
                    content: "",
                    avatarURL: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                    tag: [
                        "计算机",
                        "电子书"
                    ]
                },
                {
                    id: 5,
                    title: "软院离散数学往年考卷",
                    user: "芜湖大司马",
                    time: "2022-4-1",
                    content: "",
                    avatarURL: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                    tag: [
                        "考试",
                        "往年试卷",
                        "软件学院"
                    ]
                },
                {
                    id: 6,
                    title: "代拿快递, 外卖",
                    user: "戴拿奥特曼",
                    time: "2022-3-1",
                    content: "",
                    avatarURL: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                },
            ]
        }
    },

}
</script>

<style scoped>
</style>