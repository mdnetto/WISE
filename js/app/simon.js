define(['jquery'], function($) {
	'use strict'; 

	var Simon = {
		round: 0,
		copy: [],
		simonSequence: [],
		playerIsWinning: true,

		init: function() {
		var that = this;
			$('p[data-action="lose"]').hide();
			$('[data-action=start]').on('click', function() {
				that.startNewGame();
			});
		},

		startNewGame: function() {
			this.round = 0;
			this.copy = [];
			this.startNewRound();
			this.simonSequence = [];
			this.playerIsWinning = true;
		},
		
		startNewRound: function() {
			$('[data-round]').text(++this.round);
			this.simonSequence.push(this.generateRandomTile());

			//slice grabs a shallow copy of array starting from pos 0
			this.copy = this.simonSequence.slice(0);
			console.log("The trouble is with Copy. Copy is now: " + this.copy);
			this.animate(this.simonSequence);
		},

		logUserClick: function(e) {
			var expectedClick = this.copy.shift();
			var actualClick = $(e.target).data('tile');

			this.playerIsWinning = (expectedClick === actualClick); 
			this.checkClickMatchesSimon();
		},

		checkClickMatchesSimon: function() {
			if (this.copy.length === 0 && this.playerIsWinning) {
				this.deactivateSimonBoard();
				this.startNewRound();
			} else if (!this.playerIsWinning) {
				this.deactivateSimonBoard();
				this.endGame();	
			}
		},

		endGame: function() {
			$('p[data-action=lose]').show();
			$($('[data-round]').get(0)).text('0');
		},

		/* --- HELPER FUNCTIONS ---- */
		
		generateRandomTile: function() {
			return Math.floor(Math.random()*(4-1+1)+1);
		},

		deactivateSimonBoard: function() {
			$('.simon')
				.off('click', '[data-tile]')
				.off('mousedown', '[data-tile]')
				.off('mouseup', '[data-tile]');

			$('[data-tile]').removeClass('hoverable');
		},

		activateSimonBoard: function() {
			var that = this;
			$('.simon')
				.on('click', '[data-tile]', function(e) {
					that.logUserClick(e);
				})
				.on('mousedown', '[data-tile]', function(){
					$(this).addClass('active');
					that.playSound($(this).data('tile'));
				})
				.on('mouseup', '[data-tile]', function(){
					$(this).removeClass('active');
				});
			$('[data-tile]').addClass('hoverable');
		},

		animate: function(sequence) {
			var i = 0;
			var that = this;
			var interval = setInterval(function() {
				that.lightUp(sequence[i]);
				that.playSound(sequence[i]);
				i++;
				if (i >= sequence.length) {
					clearInterval(interval);
					that.activateSimonBoard();
				}
			}, 700);
		},

		lightUp: function(tile) {
			var tile = $('[data-tile=' + tile + ']').addClass('lit'); 
			window.setTimeout(function() {
				tile.removeClass('lit');
			}, 300);
		},

		playSound: function(tile) {
			var audio = $('<audio autoplay></audio>');
			audio.append('<source src="sounds/' + tile + '.ogg" type="audio/ogg" />');
			audio.append('<source src="sounds/' + tile + '.mp3" type="audio/mp3" />');
			$('[data-action=sound]').html(audio);
		}

	};

	return Simon;
});
