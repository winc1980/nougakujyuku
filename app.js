{
  let targets = document.querySelectorAll('.img_2,.img_3,.img_4,.small_eclipse1,.small_eclipse2,.big_eclipse,.medium_eclipse'); //アニメーションさせたい要素
      //スクロールイベント
      window.addEventListener('scroll', function () {
        var scroll = window.scrollY; //スクロール量を取得
        var windowHeight = window.innerHeight; //画面の高さを取得
        for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
          var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
          if (scroll +30 > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
            target.classList.add('is-animated'); //is-animatedクラスを加える
          }
        }
      });
  // let targets_ = document.querySelectorAll(''); //アニメーションさせたい要素
  //     //スクロールイベント
  //     window.addEventListener('scroll', function () {
  //       var scroll = window.scrollY; //スクロール量を取得
  //       var windowHeight = window.innerHeight; //画面の高さを取得
  //       for (let target_ of targets_) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
  //         var targetPos_ = target_.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
  //         if (scroll > targetPos_ - windowHeight) { //スクロール量 > ターゲット要素の位置
  //           target_.classList.add('is-focused'); //is-animatedクラスを加える
  //         }
  //       }
  //     });
      let _targets_ = document.querySelectorAll('.keyword1');
        for (let _target_ of _targets_) {
          _target_.classList.add('fade-in_left'); //fade-in_leftクラスを加える
      }
      let _targets__ = document.querySelectorAll('.keyword2');
        for (let _target__ of _targets__) {
          _target__.classList.add('fade-in_left2'); //fade-in_leftクラスを加える
      }
  }