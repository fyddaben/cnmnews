<template>
<div class='red'>
  hello ok world vue
  <span class='red-ziti'>hahahahah</span>
</div>
</template>
<style>
:root {
  --mainColor: red;
}
.red {
  & span{
    color: green;
  }
}
@b red{
  color: var(--mainColor);
  @m ziti{
    font-size: 50px;
  }
}
</style>
