<template>
  <div class="post">
    <!-- header -->
    <header class="header">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">ukeskin</CustomText>
          </div>

          <div>
            <CustomText size="xsmall">Londra</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button"><IconMore /></button>
      </div>
    </header>
    <!-- media -->
    <div class="post-media">
      <img
        src="https://instagram.fist2-4.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/126939078_895127917689729_6956314852766362150_n.jpg?_nc_ht=instagram.fist2-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Bk6C2wFrrJsAX_V_drV&tp=1&oh=c597eb3e79f0a3aa0e1bed6aac01552d&oe=6014180B"
        alt=""
      />
    </div>

    <div class="action-buttons">
      <button type="button"><IconLike /></button>
      <button type="button"><IconComment /></button>
      <button type="button"><IconDirect /></button>
      <button type="button"><IconSave /></button>
    </div>

    <div class="view-count">
      <CustomText tag="b">1.232 beğenme</CustomText>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import CustomText from "@/components/CustomText.vue";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";
export default {
  name: "Post",
  components: {
    Avatar,
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
  },
};
</script>

<style scoped>
.post {
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid rgb(var(--b6a));
}
.header {
  padding: 0px 16px;
  height: 60px;
  display: flex;
  align-items: center;
  &-author {
    display: flex;
    align-items: center;

    &-info {
      margin-left: 8px;
    }
  }
  &-more {
    margin-left: auto;
  }
}
.action-buttons {
  padding: 0px 16px;
  height: 45px;
  display: flex;
  align-items: center;

  button {
    margin-right: 16px;

    &:last-child {
      margin-left: auto;
      margin-right: 0;
    }
  }
}
.view-count {
  padding: 0px 16px;
}
</style>