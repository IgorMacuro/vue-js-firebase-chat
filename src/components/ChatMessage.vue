<template>
  <div class="message" :class="{ 'from-user': owner }">
    {{ message.text }}
    <br />

    <audio v-if="message.audioURL" :src="message.audioURL" controls></audio>
    <br />

    <span class="sender">from UID {{ message.sender }}</span>
  </div>
</template>

<script>
export default {
    props: ['message', 'owner']
};
</script>
<style>
.message {
  background: #262d31;
  color: #ccdbdc;
  margin-left: 10px;
  margin-right: auto;
  border-radius: 5px;
  padding: 12px;
  display: inline-block;
}
.from-user {
  margin-right: 10px;
  margin-left: auto;
  background: #056162;
}
.sender {
  font-size: 0.5rem;
}
</style>