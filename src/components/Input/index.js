import { InputContainer } from './styles';

const Input = ({ onChange, value }) => {
	return (
		<InputContainer>
			<input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Digite o Usuario do GitHub"/>
		</InputContainer>
	);
};

export { Input };
