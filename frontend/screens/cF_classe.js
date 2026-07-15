import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from 'react-native';
import {useState} from 'react';
    
    const styles = StyleSheet.create({
        geral: {
            backgroundColor: '#280704',
        },
        botao:{
            backgroundColor: '#282828',
            padding: 12,
            borderRadius: 5, 
            margin: '1%',  
            marginTop: 10,
            width: '120%',
            height: 70,
            flex: 1,
            alignItems: 'center'
        },
        card: {
            backgroundColor: '#931b0f',
            marginLeft: '40%',
            marginTop: -170,
            padding: 10,
            borderWidth: 2,
            borderColor: '#5c0607',
            borderRadius: 5
        },
        container: {
            flexDirection: 'column',
            flex: 1,
            width: '30%'
        },
        texto1: {
            color: '#eda21b',
            fontWeight: 'bold',
        },
        texto2: {
            color: "#fff4e3",
        }
    })
    export default function App() {
                const [classe, setClasse] = useState('');
                const [hab1, setHab1] = useState('');
                const [hab2, setHab2] = useState('');
                const [prof, setProf] = useState('');
                const [vidaC, setVidaC] = useState('');
                const [manaC, setManaC] = useState('');
                const [per, setPer] = useState('');
        
                return (
                <ScrollView style={styles.geral}>
                    <View style={styles.container}>
                    <TouchableOpacity 
                        onPress={()=> {setClasse("Arcanista")
                            setHab1('\nCaminho do Arcanista\nA magia é um poder incrível, capaz de alterar a realidade. Esse poder tem fontes distintas e cada uma opera conforme suas próprias regras. Escolha uma das opções a seguir.Uma vez feita, essa escolha não pode ser mudada. \n• Bruxo. Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa empunhar o foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem RD 10 e PV iguais à metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é Inteligência.\n• Feiticeiro. Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes (veja T20LB página 39). Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo, mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.), em vez de a cada nível. Seu atributo-chave para magias é Carisma. \n• Mago. Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por,exemplo, se conhece 7 magias, escolhe 3). Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um grimório tem as mesmas estatísticas de um foco (veja acima) e pode ser recuperado da mesma forma. Você começa com uma magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia adicional daquele círculo. Seu atributo-chave para magias é Inteligência.');
                            setHab2('\nMagias\nVocê pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho (veja acima) e você soma seu atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras de magia.');
                            setProf('\nProficiências: Nenhuma');
                            setVidaC('\nPontos de Vida Iniciais: 8 + Con\nPontos de Vida por Nível: 2 + Con');
                            setManaC('\nPontos de Mana por Nível: 6');
                            setPer('\nPerícias: Misticismo (Int) e Vontade (Sab), mais 2 a sua escolha entre Conhecimento (Int), Diplomacia (Car), Enganação (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Nobreza (Int), Ofício (Int) e Percepção (Sab).')
                        }}
                        style={styles.botao}
                        ><Text style={styles.texto1}>Arcanista</Text></TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=> {setClasse("Bárbaro")
                            setHab1('\nFúria\nVocê pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil.');
                            setHab2('');
                            setProf('\nProficiências: Armas Marciais e Escudos');
                            setVidaC('\nPontos de Vida Iniciais: 24 + Con\nPontos de Vida por Nível: 6 + Con');
                            setManaC('\nPontos de Mana por Nível: 3');
                            setPer('\nPerícias: Fortitude (Con) e Luta (For), mais 4 sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des), Sobrevivência (Sab) e Vontade (Sab).');
                        }} 
                        style={styles.botao}
                        ><Text style={styles.texto1}>Bárbaro</Text></TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=> {setClasse("Guerreiro")
                        setHab1('\nAtaque Especial\nQuando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano');
                        setHab2('');
                        setProf('\nProficiências: Armas Marciais, Armaduras Pesadas e Escudos');
                        setVidaC('\nPontos de Vida Iniciais: 20 + Con\nPontos de Vida por Nível: 5 + Con');
                        setManaC('\nPontos de Mana por Nível: 3');
                        setPer('\nPerícias: Luta (For) ou Pontaria (Des), Fortitude (Con), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Guerra (Int), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des).');
                    }}
                    style={styles.botao}
                    ><Text style={styles.texto1}>Guerreiro</Text></TouchableOpacity>

                    </View>
            <View style={styles.card}>
                    <Text style={styles.texto1}>{classe}</Text>
                    <Text style={styles.texto2}>{vidaC}</Text>
                    <Text style={styles.texto2}>{manaC}</Text>
                    <Text style={styles.texto2}>{prof}</Text>
                    <Text style={styles.texto2}>{per}</Text>
                    <Text style={styles.texto2}>{hab1}</Text>
                    <Text style={styles.texto2}>{hab2}</Text>
            </View>

                </ScrollView>
        
        )
        
        }