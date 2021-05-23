function scanMedia() {
	$('#media_src').attr("src",'https://www.bilibili.com/video/BV1dW411i7QC?p=2&share_source=copy_web');
	document.querySelector('video').load();//video重载，以免读取src失败
	$("#mediaModal").modal('show');
}
