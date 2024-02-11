<script lang="ts">
import Head from '../components/Head.svelte'; 

console.log("#about");

//
const handleClick = function(){
  console.log("#handleClick" , new Date().toString());
}
</script>

<!-- -->
<main>
  <div>
    <Head />
    <hr />
    <h1>Test123</h1>
    <hr />
    <button on:click={handleClick} class="btn btn-primary">Test</button>
  </div>
</main>

<style>
</style>

<!--
<a href="/">[ home ]</a>
-->

