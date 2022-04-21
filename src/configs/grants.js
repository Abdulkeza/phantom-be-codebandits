export default {
	user: {
		drivers: {
			'read:any': [
				'*',
				'!email',
				'!user.password',
				'!password',
				'!id',
				'!role',
			],
		},
	},
	driver: {
		drivers: {
			'read:own': ['*', '!user.password'],
			'update:own': ['*', '!email', '!password', '!user.password'],
		},
		buses: {
			'update:own': ['*'],
		},
		profiles: {
			'update:own': ['*', '!email', '!password'],
		},
	},

	operator: {
		routes: {
			'create:any': ['*'],
			'read:any': ['*'],
			'update:any': ['*'],
			'delete:any': ['*'],
		},
		drivers: {
			'create:any': ['*'],
			'read:any': ['*', '!user.password'],
			'update:any': ['*'],
			'delete:any': ['*'],
		},
		buses: {
			'create:any': ['*'],
			'read:any': ['*'],
			'update:any': ['*'],
			'delete:any': ['*'],
		},
	},
	admin: {
		companies: {
			'create:any': ['*'],
		},
	},
};
