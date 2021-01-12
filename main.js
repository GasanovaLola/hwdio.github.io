Vue.component('diagrams', {
    data: () => ({
                items: [
                    {name: "№1", id: 0, height: localStorage.getItem(`row0`), color: "darksalmon"},
                    {name: "№2", id: 1, height: localStorage.getItem(`row1`), color: "aqua"},
                    {name: "№3", id: 2, height: localStorage.getItem(`row2`), color: "blue"},
                    {name: "№4", id: 3, height: localStorage.getItem(`row3`), color: "aquamarine"},
                    {name: "№5", id: 4, height: localStorage.getItem(`row4`), color: "blueviolet"},
                    {name: "№6", id: 5, height: localStorage.getItem(`row5`), color: "cornflowerblue"},
                    {name: "№7", id: 6, height: localStorage.getItem(`row6`), color: "darkkhaki"}
                ]
            }),
    template: 
    `<div id="Diagrams">
        <div 
            v-for="item in items" 
            v-bind:id="'row' + item.id"
            :key="item.color" 
            class="row"
            v-bind:style="{ background: item.color, height: item.height + 'px' }">
            <p class="text-name"> {{ item.name }} </p>
            <input type="range">
        </div>
    </div>`,
    methods: {
        update: function(event) {
    
          value = event.target.value;

          console.log(event);
    
          this.info = value;
          console.log(value)
        }
    }
});

new Vue({ el: '#components' });

var row = document.querySelectorAll('.row');
var range = document.getElementsByTagName('input');

for (let i = 0; i < range.length; i++) {
    range[i].addEventListener('change', function () {
        let temp = 100 + +range[i].value;
        document.getElementById(`row${i}`).style.height = `${temp}px`;

        localStorage.setItem(`row${i}`, row[i].offsetHeight);
    });
};

console.log(row);