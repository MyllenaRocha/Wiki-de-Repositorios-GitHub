import styled from 'styled-components';

export const InputContainer = styled.div`
	border: 1px solid #fafafa;
	border-radius: 20px;
	width: 80%;
	height: 62px;

	margin: 20px;

	input {
		background: transparent;
		width: 90%;
		height: 62px;
		padding: 0 20px;
		color: #fff;
		font-size: 20px;
		border: 0;
		outline: 0;
	}

	input &:focus {
		outline: none;
	}
`;
