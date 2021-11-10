<template>

  <div class="wrapper">
    <h1>
      Quadratic Equation
    </h1>

    <div class="container">
      <main>
        <div class="description">
          <p>Implement the function <i>findRoots</i> to find roots of quadratic equation: ax<sup>2</sup> + bx + c = 0.</p>
          <p>The roots of the quadratic equation can be found with the following formula: <img src="/dev/null"/></p>
          <p>For example, the roots of the equation 2x<small>2</small> + 10x + 8 = 0 are -1 and -4</p>
        </div>

        <pre class="line-numbers"><code class="language-go" v-html="sourceCode" /></pre>

        <button @click="showResults = true">
          Run
        </button>

        <div class="results" v-if="showResults">
          <div class="summary">
            Tests: 2 pass / 3 fail
          </div>
          <ul class="list">
            <li class="pass">Function return two values</li>
            <li class="pass">Values are numbers</li>
            <li class="pass">null</li>
            <li class="fail">Equal roots</li>
            <li class="fail">Distinct roots</li>
          </ul>
        </div>
      </main>

      <aside>
        <div>
          <h2>Tags</h2>
          <ul class="tags">
            <li>Go</li>
            <li>Arithmetic</li>
            <li>Math</li>
            <li>Roots</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <strong>Difficulty:</strong> Easy
            </li>

            <li>
              <strong>Duration:</strong> 10min
            </li>

            <li>
              <strong>Author:</strong> Anonymous
            </li>
          </ul>
        </div>

        <div>
          <h2>Score Distribution</h2>
          <p>
            Not enough data for chart
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import sourceCode from './source-code.js'

const showResults = ref(false)
</script>

<style lang="postcss">
:root {
  --background: #f5f2f0;
}

#app {
  font-family: Futura, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  max-width: 960px;
  margin: auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
}

main {
  & pre {
    margin: 0 !important;

    & .line-numbers-rows {
      top: -25px !important;

      & span:nth-child(1) {
        opacity: 0;
      }
    }
  }

  & button {
    margin: 20px 0;
    padding: 15px 50px;
    font-size: 14px;
    background: #646cff;
    border: none;
    color: white;
    border-radius: 5px;
  }

  & .results {
    & .summary {
      padding: 10px;
      text-align: right;
      border: 1px solid var(--background);
      background: #fff;
    }

    & .list {
      margin: 0;
      padding: 1em;
      background: var(--background);
      list-style: none;

      & li {
        &:before {
          border-radius: 10px;
          padding-right: 10px;
        }

        &.pass {
          &:before {
            content: '✓';
            color: #2ecc71;
          }
        }

        &.fail {
          &:before {
            content: '✖';
            color: #e74c3c;
          }

          &:nth-child(5) {
            &:before {
              color: #d91400;
            }
          }
        }
      }
    }
  }
}

aside {
  & > div {
    padding: 15px;
    margin-bottom: 20px;
    background: var(--background);

    & h2 {
      margin: 0 0 5px 0;
    }
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & .tags {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;

    & li {
      padding: 5px 10px;
      background: #fff;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;

      &:nth-child(3) {
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
