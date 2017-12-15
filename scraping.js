function scraping() {
  var response = UrlFetchApp.fetch("https://www.google.co.jp");
  var myRegexp = /<title>([\s\S]*?)<\/title>/i;
  var match = myRegexp.exec(response.getContentText());
  var title = match[1];
  Logger.log(title.replace(/(^\s+)|(\s+$)/g, "")); // ログに書き込み
  Browser.msgBox(title.replace(/(^\s+)|(\s+$)/g, "")); // スプレッドシート上にメッセージボックス表示
}