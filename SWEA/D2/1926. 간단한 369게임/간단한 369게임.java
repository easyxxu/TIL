import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
			int N = sc.nextInt();
			
			for(int i = 1;i <= N;i++) {
				// i의 각 자릿수에 3,6,9가 있다면 그 개수에 따라 - 반환
				int cnt = 0;
				String str = String.valueOf(i);
				char[] charArr = str.toCharArray();
				
				for(char chr : charArr) {
					if(chr != '3' && chr != '6' && chr !='9') continue;
					if(chr == '3') {
						cnt++;
					}
					else if(chr == '6') {
						cnt++;
					}
					else if(chr == '9') {
						cnt++;
					}
				}
				if(cnt == 0) {
					System.out.printf("%d ", i);
				}
				if(cnt > 0) {
					for(int k = 1; k <= cnt; k++) {
						System.out.print("-");
					}
					System.out.print(" ");
				}
			}
		}
	}