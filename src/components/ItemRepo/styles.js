import styled from 'styled-components';

export const ItemContainer = styled.div`
	width: 80%;

	div.content {
		display: flex;
		flex-direction: row;
	}

	img {
		width: 100%;
		max-width: 127px;
		border-radius: 100%;
		margin-right: 10px;
	}

	h3 {
		font-size: 32px;
		color: #fafafa;
	}

	p {
		font-size: 16px;
		color: #fafafa50;
		margin-bottom: 20px;
	}

	ul.social {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	ul li {
		color: #fff;
		font-weight: 500;
	}

	div.links {
		justify-content: space-between;
		display: flex;
		align-items: end;
	}

	.remover {
		color: #ff0000;
		margin-top: 20px;
		background: transparent;
		border: none;
	}

	hr {
		color: #fafafa60;
		margin-top: 20px 0;
	}
`;
