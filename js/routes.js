import List from './pages/List.js';
import CHList from './pages/CHList.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/ch', component: CHList },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
