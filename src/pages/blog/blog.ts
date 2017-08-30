import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

const BLOG = [
  {
    title: 'Como a Vos mismo',
    img:'http://iglesiadelafamilia.com/wp-content/uploads/2016/06/imagen-Blog-3-800x400.png',
    text:'En una mañana fría de invierno, cuando aún vivía en la casa de mis padres,  desperté y bajé rápidamente al comedor. El hogar a leña estaba encendido, me senté en el sillón y mientras me tapaba con una cobija, mi madre me trajo una taza de té caliente. Hacía dos días que habíamos terminado un […]',
  },
  {
    title: 'Ser antes que hacer',
    img:'http://iglesiadelafamilia.com/wp-content/uploads/2016/08/imagen-Blog-2-800x400.png',
    text:'Me sentía raro, pareciera que todo lo vivido durante la actividad multitudinaria del fin de semana no había servido mucho. Las felicitaciones de los padres (cosa rara en la pastoral juvenil) perdieron su efecto. Varios meses realizando el mismo evento en diferentes lugares. Muchas reuniones de trabajo, promoción',
  },
  {
    title: 'Imposible… Solo si Dios no esta',
    img:'http://iglesiadelafamilia.com/wp-content/uploads/2016/08/imagen-Blog-4-800x400.png',
    text:'Escribe claramente la visión en tablillas para que quien la lea corra a contársela a los demás.” Habacuc 2:4. ¿Cuando tengas un sueño, escríbelo. Porque los sueños son el pulmón de un soñador. Cuando tengas un sueño cree. Porque la fe es el lenguaje de Dios. Cuando tengas un sueño, comienza a hacer algo. Mira que',
  },
  {
    title: 'No son cuantos, sino quienes?',
    img:'http://iglesiadelafamilia.com/wp-content/uploads/2017/05/imagen-Blog-1-800x400.png',
    text:'Esta frase del título la escuché decir en una convención de Liderazgo Juvenil y revolucionó mi manera de pensar, pero no la entendí hasta que tuve una experiencia personal. Hace unos años en Copados por Jesús (aclaro para aquellas personas que no pertenecen a mi generación que copado es un término utilizado a',
  }
];
/**
 * Generated class for the BlogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
blog = BLOG;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

}
