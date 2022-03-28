Alpine.data("inputData", () => ({
  inputList: [
    {
      title: "お名前",
      type: "text",
      value: "",
      message: "",
      validate() {
        // 1文字以上48文字以下
        if (this.value.length > 0 && this.value.length <= 48) {
          this.message = "";
        } else {
          this.message = "お名前は1文字以上48文字以下で入力してください。";
        }
      },
    },
    {
      title: "所属",
      type: "text",
      value: "",
      message: "",
      validate() {
        // 1文字以上48文字以下
        if (this.value.length > 0 && this.value.length <= 256) {
          this.message = "";
        } else {
          this.message = "所属は1文字以上256文字以下で入力してください。";
        }
      },
    },
    {
      title: "メール",
      type: "email",
      value: "",
      message: "",
      validate() {
        // 1文字以上48文字以下
        if (this.value.length > 0 && this.value.length <= 100) {
          this.message = "";
        } else {
          this.message = "メールは1文字以上100文字以下で入力してください。";
        }
      },
    },
    {
      title: "件名",
      type: "text",
      value: "",
      message: "",
      validate() {
        // 1文字以上48文字以下
        if (this.value.length > 0 && this.value.length <= 100) {
          this.message = "";
        } else {
          this.message = "件名は1文字以上100文字以下で入力してください。";
        }
      },
    },
    {
      title: "本文",
      type: "textarea",
      value: "",
      message: "",
      validate() {
        // 1文字以上48文字以下
        if (this.value.length > 0 && this.value.length <= 2000) {
          this.message = "";
        } else {
          this.message = "本文は1文字以上2000文字以下で入力してください。";
        }
      },
    },
  ],
}));
Alpine.data("WorksData", () => ({
  worksList: [
    {
      title: "ハル幼稚園",
      icon: "./images/work1.png",
    },
    {
      title: "津田沼PR",
      icon: "./images/work2.png",
    },
    {
      title: "カップヌードルサイト",
      icon: "./images/work3.png",
    },
    {
      title: "未確認生物図鑑",
      icon: "./images/work4.png",
    },
    {
      title: "ブログ投稿アプリ",
      icon: "./images/work5.png",
    },
    {
      title: "ユニクロ",
      icon: "./images/work6.png",
    },
  ],
}));
Alpine.data("SkillData", () => ({
  skillList: [
    {
      title: "html5",
      icon: "./images/html.png",
    },
    {
      title: "CSS3",
      icon: "./images/css.png",
    },
    {
      title: "JavaScript",
      icon: "./images/js.png",
    },
    {
      title: "Jquery",
      icon: "./images/jquery.png",
    },
    {
      title: "php",
      icon: "./images/php.png",
    },
    {
      title: "Swift",
      icon: "./images/swift.png",
    },
    {
      title: "Node.js",
      icon: "./images/node.png",
    },
    {
      title: "Vue.js",
      icon: "./images/vue.png",
    },
    {
      title: "Alpine.js",
      icon: "./images/alpine.png",
    },
    {
      title: "Chart.js",
      icon: "./images/chart.png",
    },
    {
      title: "Three.js",
      icon: "./images/three.png",
    },
    {
      title: "Laravel",
      icon: "./images/Laravel.png",
    },
    {
      title: "WordPress",
      icon: "./images/wordpress.png",
    },
    {
      title: "Bootstrap",
      icon: "./images/bootstrap.png",
    },
    {
      title: "Tailwind CSS",
      icon: "./images/tailwind.png",
    },
    {
      title: "MySQL",
      icon: "./images/mysql.png",
    },
    {
      title: "GitHub",
      icon: "./images/github.png",
    },
    {
      title: "AWS",
      icon: "./images/aws.png",
    },
    {
      title: "Illustrator",
      icon: "./images/illustrator.png",
    },
    {
      title: "Photoshop",
      icon: "./images/photoshop.png",
    },
    {
      title: "XD",
      icon: "./images/xd.png",
    },
    {
      title: "Figma",
      icon: "./images/figma.png",
    },
    {
      title: "GIMP",
      icon: "./images/gimp.png",
    },
    {
      title: "PowerPoint",
      icon: "./images/powerpoint.png",
    },
  ],
}));
const form = $("#form");
$(".send").on("click", (evt) => {
  form.submit();
  form[0].reset();
  //任意の実行したい処理
  return false;
});
function send() {
  alert("送信しました！");
}
