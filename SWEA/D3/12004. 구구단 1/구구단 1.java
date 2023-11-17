import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			int N = Integer.parseInt(br.readLine());
			// N이 1~9로 이루어진 두 수a,b의 곱으로 표현 가능?
			String answer = "";
			for(int i=1;i<=9;i++) {
				for(int j=1;j<=9;j++) {
					if(N == i * j) {
						answer = "Yes";
						break;
					}
					else if(N != i * j) {
						answer = "No";
					}
				}
				if(answer.equals("Yes")) break;
			}
			sb.append("#"+tc+" "+answer+"\n");
		}
		System.out.print(sb);
	}
}