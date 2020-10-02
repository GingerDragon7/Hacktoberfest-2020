
// the Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


const adjacencyList = new Map();

function addNode(airport){
	adjacencyList.set(airport, []);
}


function addEdge(origin, destination){
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach(route => addEdge(...route) );

console.log('the adjacencyList', adjacencyList);

// bfs and dfs 


function bfs(start){
	const queue = [start]
	const visited = new Set();
	while(queue.length > 0){
		const airport = queue.shift(''); // mutates the queue 
		const destinations = adjacencyList.get(airport);
		for(const destination of destinations){
			if (destination === "BKK") {
				console.log("BFS found Bangkok");
			}
			if (!visited.has(destination) ) {
				visited.add(destination);
				queue.push(destination);
				console.log(destination)
			}
		}
	} 
}

bfs('PHX');




























