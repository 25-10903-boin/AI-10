// gameLogic.js

class GameStateManager {
    constructor() {
        this.state = {};
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    getState() {
        return this.state;
    }
}

class RewardCircuit {
    constructor() {
        this.rewards = {};
    }

    addReward(player, reward) {
        if (!this.rewards[player]) {
            this.rewards[player] = [];
        }
        this.rewards[player].push(reward);
    }

    getRewards(player) {
        return this.rewards[player] || [];
    }
}

// Exporting classes for external use
module.exports = { GameStateManager, RewardCircuit };