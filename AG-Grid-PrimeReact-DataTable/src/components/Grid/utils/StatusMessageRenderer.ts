type Status = 'success' | 'warning' | 'error' | 'default';

const statusMessages: Record<Status, string> = {
	success: 'Operación exitosa',
	warning: 'Atención requerida',
	error: 'Hubo un error',
	default: 'Sin estado',
};

export const getStatusMessage = (status: Status): string => {
	return statusMessages[status] || statusMessages.default;
};
