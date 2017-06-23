<html>
	<head>

        <script
                src="https://code.jquery.com/jquery-3.2.1.min.js"
                integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
                crossorigin="anonymous"></script>
        <script src="formulario.js" type="text/javascript"></script>
	</head>
	<body>
		<!-- Exercício 1 -->

        <fieldset>
            <legend>Formulário:</legend>
            <form action="" method="post">

                <label>Nome:
                    <input type="text" name="nome"/>
                </label>
                <label>Data Nascimento:
                    <input type="date" name="nascimento" onblur="calcular()"/>
                </label>
                <label>Sexo:
                    <select name="sexo">
                        <option></option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </label>
                <label>Idade:
                    <input readonly type="text" name="idade"/>
                </label>
                <label>E-mail:
                    <input type="text" name="email"/>
                </label>

                <button type="submit" name="salvar">Salvar</button>

            </form>
        </fieldset>

		<!-- Exercício 2 -->


		<!-- Exercício 7 -->

		<!-- Exercício 8 -->
	</body>
</html>